import { h, render, Component } from 'preact'
import './style.less'
import NProgress from 'nprogress'
import Categories from './Categories'
import Navigation from './Navigation'
import { shiciCache } from './utils'
import configUtils from './configs'

NProgress.configure({
  showSpinner: false
})

const selectCategoryKey = 'category'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      /**
       * @type {import('./define').SiteConfig}
       */
      site: null,
      /**
       * @type {string}
       */
      selectedCategory: null,
      /**
       * @type {import('./define').Category[]}
       */
      categories: [],
      shiCi: {}
    }

    this.init()
    this.initJinRiShiCi()
    this.selectedCategory = this.selectedCategory.bind(this)
  }

  async initJinRiShiCi () {
    this.setState({
      shiCi: await shiciCache.get()
    })
  }

  selectedCategory (category) {
    localStorage.setItem(selectCategoryKey, category)
    this.setState({
      selectedCategory: category
    })
  }

  async init () {
    NProgress.start()
    await configUtils.fetchData()

    const siteConfigs = configUtils.site
    const categories = configUtils.categories
    const selectedCategory = localStorage.getItem(selectCategoryKey)
    const selectedCategoryItem =
      configUtils.categories.find((c) => c.title === selectedCategory) || configUtils.categories[0]

    this.setState({
      site: siteConfigs,
      categories,
      selectedCategory: selectedCategoryItem.title
    })

    NProgress.done()
  }

  render () {
    const { site, selectedCategory, categories, shiCi } = this.state

    if (!site) {
      return <div />
    }

    const selectedCategoryItem = categories.find((c) => c.title === selectedCategory)

    const bgColor = selectedCategoryItem.bgColor

    const items = configUtils.getItemsByTags(selectedCategoryItem.tags)

    const shiCiContent = shiCi && `${shiCi.content} 一一 ${shiCi.origin.author}`
    return (
      <div className="app">
        <div className="header header-img" style={{ backgroundImage: `url(${site.header.bgImg})` }}>
          <span
            className="header-title ab-v-center"
            style={{
              color: site.header.color,
              fontSize: '1.2em'
            }}
          >
            {shiCiContent}
          </span>
          <a
            className="header-add-site"
            rel="noopener noreferrer"
            href={site.header.edit.addr}
            target="_blank"
            title={site.header.edit.title}
          >
            +
          </a>
        </div>
        <div className="content">
          <Categories
            items={categories}
            site={site}
            selectCategory={this.selectedCategory}
            selectedCategory={selectedCategory}
          />
          <Navigation items={items} site={site} bgColor={bgColor} />
        </div>
      </div>
    )
  }
}

const $div = document.createElement('div')
$div.id = 'app'
document.body.appendChild($div)

render(<App />, $div)
