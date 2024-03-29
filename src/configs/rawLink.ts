import { IconType } from '../Icons'

export interface IRawLink {
  title: string
  icon?: IconType
  desc: string
  tags: IconType[]
  links: {
    [key in IconType]?: string
  }
}
export const rawLinks: IRawLink[] = [
  {
    title: 'Github',
    desc: '全球 Git 分布式存储仓库',
    tags: ['code'],
    links: {
      href: 'https://www.github.com',
    },
  },
  {
    title: 'I18n locales code',
    icon: 'lang',
    desc: '翻译时对应的 code',
    tags: ['code'],
    links: {
      href: 'https://www.iana.org/assignments/language-subtag-registry/language-subtag-registry',
    },
  },
  {
    title: '今日诗词 API',
    desc: '诗词实时智能推荐 - 一言 API',
    tags: ['code'],
    links: {
      href: 'https://www.jinrishici.com',
    },
  },
  {
    title: 'Everything',
    desc: '小巧，快速的搜索工具',
    tags: ['win'],
    links: {
      href: 'https://voidtools.com',
    },
  },
  {
    title: 'Rufus',
    desc: '小巧的 U 盘启动，引导制作工具',
    tags: ['win'],
    links: {
      git: 'https://github.com/pbatard/rufus',
      href: 'https://rufus.ie',
    },
  },
  {
    title: 'OBS 直播工具',
    desc: '开源直播工具',
    tags: ['win', 'mac', 'linux'],
    links: {
      href: 'https://obsproject.com/',
    },
  },
  {
    title: 'Cloc',
    icon: 'tool',
    desc: '统计代码行数的工具',
    tags: ['terminal'],
    links: {
      git: 'https://github.com/AlDanial/cloc',
    },
  },
  {
    title: '百度脑图',
    desc: '百度良心软件，在线脑图工具',
    tags: ['web'],
    links: {
      href: 'http://naotu.baidu.com/',
    },
  },
  {
    title: 'Figma',
    desc: '在线原型设计工具',
    tags: ['web'],
    links: {
      href: 'https://www.figma.com',
    },
  },
  {
    title: 'Squoosh',
    desc: 'Web 技术图片压缩工具',
    tags: ['web'],
    links: {
      href: 'https://squoosh.app/',
    },
  },
  {
    title: 'TinyPNG',
    desc: 'TinyPNG能在完整保留透明度的同时将PNG图片压缩50-80%',
    tags: ['web', 'image'],
    links: {
      href: 'https://tinypng.com/',
    },
  },
  {
    title: 'Removbg',
    desc: '免费在线 AI 抠图神器，同时提供 API 和 PS 插件',
    tags: ['web', 'image'],
    links: {
      href: 'https://www.remove.bg',
    },
  },
  {
    title: 'VectorLogoZone',
    desc: '图标库',
    tags: ['web', 'icon'],
    links: {
      href: 'https://www.vectorlogo.zone',
    },
  },
  {
    title: '壁纸网站',
    desc: '桌面、手机壁纸在线下载网站/社区',
    tags: ['web', 'wallpaper'],
    links: {
      href: 'https://wall.alphacoders.com/',
    },
  },
  {
    title: 'FreeLogoDesgin',
    desc: '方便，简单的免费 Logo 设计网站',
    tags: ['web', 'logo'],
    links: {
      href: 'https://www.freelogodesign.org/',
    },
  },
  {
    title: 'SteamGridDB',
    desc: '把其他平台的游戏一键导入到 Steam 中',
    tags: ['game', 'tool'],
    links: {
      href: 'https://www.steamgriddb.com/manager',
      git: 'https://github.com/steamgriddb/steamgriddb-manager',
    },
  },
  {
    title: 'WarriorJS',
    desc: '用代码玩的冒险游戏',
    tags: ['game'],
    links: {
      href: 'https://warrior.js.org/',
      git: 'https://github.com/olistic/warriorjs',
    },
  },
  {
    title: 'Regexper',
    desc: '正则可视化工具',
    tags: ['web'],
    links: {
      href: 'https://regexper.com/',
      gitlab: 'https://gitlab.com/javallone/regexper-static',
    },
  },
  {
    title: 'JSON Schema Store',
    desc: 'JSON Schema 存储仓库',
    tags: ['web'],
    links: {
      href: 'http://schemastore.org/json/',
      git: 'https://github.com/schemastore/schemastore/',
    },
  },
  {
    title: 'Cemu Emulator',
    desc: 'Will U 模拟器',
    tags: ['game', 'tool'],
    links: {
      href: 'https://cemu.info/',
    },
  },
  {
    title: 'HashTab',
    desc: '右键，属性，hashtab，直接对比 MD5、SHA-1 值',
    tags: ['win'],
    links: {
      href: 'http://implbits.com/products/hashtab/',
    },
  },
  {
    title: 'Hand Brake',
    desc: '开源免费视频转码软件，支持几乎所有格式',
    tags: ['win', 'mac', 'linux', 'video'],
    links: {
      href: 'https://handbrake.fr/',
      git: 'https://github.com/HandBrake/HandBrake',
    },
  },
  {
    title: 'Screen To Gif',
    desc: '开源免费录制编辑 Gif 的软件',
    tags: ['win', 'gif'],
    links: {
      href: 'https://www.screentogif.com/',
      git: 'https://github.com/NickeManarin/ScreenToGif/',
    },
  },
  {
    title: 'Snipaste',
    desc: '免费且功能强大的截图软件',
    tags: ['win', 'mac', 'linux'],
    links: {
      href: 'https://www.snipaste.com/',
    },
  },
  {
    title: 'ManicTime',
    desc: '全平台记录使用应用时间的软件，基础版免费',
    tags: ['win', 'mac', 'linux'],
    links: {
      href: 'https://www.manictime.com/',
    },
  },
  {
    title: 'aText',
    desc: '非常方便的预定制文本输入工具',
    tags: ['win', 'mac'],
    links: {
      href: 'https://trankynam.com/atext/',
    },
  },
  {
    title: 'mouseinc',
    desc: '小巧好用的全局鼠标手势',
    tags: ['win', 'tool'],
    links: {
      href: 'https://shuax.com/project/mouseinc/',
    },
  },
  {
    title: 'UsbEAm Hosts Editor',
    desc: '不同游戏平台 hosts 修改',
    tags: ['game', 'win'],
    links: {
      href: 'https://www.dogfight360.com/blog/475/',
    },
  },
  {
    title: 'Wallhaven',
    desc: '优质壁纸网站，并提供 API',
    tags: ['api', 'wallpaper'],
    links: {
      href: 'https://wallhaven.cc/help/api',
    },
  },
  {
    title: '清华源镜像',
    desc: '镜像',
    tags: ['mirror', 'china'],
    links: {
      href: 'https://mirrors.tuna.tsinghua.edu.cn/',
    },
  },
  {
    title: '腾讯源镜像',
    desc: '镜像',
    tags: ['mirror', 'china'],
    links: {
      href: 'https://mirrors.cloud.tencent.com/',
    },
  },
  {
    title: '阿里源镜像',
    desc: '镜像',
    tags: ['mirror', 'china'],
    links: {
      href: 'https://developer.aliyun.com/mirror/',
    },
  },
  {
    title: '华为源镜像',
    desc: '镜像',
    tags: ['mirror', 'china'],
    links: {
      href: 'https://mirrors.huaweicloud.com/',
    },
  },
  {
    title: '中科大源镜像',
    desc: '镜像',
    tags: ['mirror', 'china'],
    links: {
      href: 'http://mirrors.ustc.edu.cn/',
    },
  },
  {
    title: '淘宝 NPM 镜像',
    desc: '镜像',
    tags: ['mirror', 'china', 'npm'],
    links: {
      href: 'https://developer.aliyun.com/mirror/NPM',
    },
  },
  {
    title: 'Whimsical',
    desc: '一个非常优秀的流程图工具',
    tags: ['tool', 'flow', 'web'],
    links: {
      href: 'https://whimsical.com/flowcharts',
    },
  },
  {
    title: 'file examples',
    desc: '提供各种各样格式的测试文件',
    tags: ['tool', 'web'],
    links: {
      href: 'https://file-examples.com/',
    },
  },
  {
    title: 'Magi',
    desc: '一个基于机器学习的搜索引擎，界面很好看',
    tags: ['tool', 'search', 'web'],
    links: {
      href: 'https://magi.com/',
    },
  },
  {
    title: 'Symbolab',
    desc: '一个非常优秀的数学计算器，解方程/函数的利器',
    tags: ['tool', 'math', 'web'],
    links: {
      href: 'https://zs.symbolab.com/',
    },
  },
  {
    title: '小鸡词典',
    desc: '一个解释流行词汇搜索引擎',
    tags: ['tool', 'search', 'web'],
    links: {
      href: 'https://jikipedia.com/',
    },
  },
  {
    title: 'MagicaVoxel',
    desc: '一个体素编辑工具',
    tags: ['software', 'mac', 'win'],
    links: {
      href: 'https://ephtracy.github.io/',
    },
  },
  {
    title: 'VoxEdit',
    desc: '一个体素编辑工具，支持动画',
    tags: ['software', 'mac', 'win', 'linux'],
    links: {
      href: 'https://www.voxedit.io/',
    },
  },
  {
    title: 'Google Web',
    desc: 'Google 发布 Web 新功能以及最佳实践的地方',
    tags: ['news', 'web'],
    links: {
      href: 'https://developers.google.com/web',
    },
  },
  {
    title: 'Three.js',
    desc: '一个浏览器 3D 库，可以做非常酷炫的东西',
    tags: ['js', 'openGL'],
    links: {
      href: 'https://threejs.org/',
    },
  },
  {
    title: 'Green Sock',
    desc: '一个动画库，争做现代浏览器动画的标准',
    tags: ['js', 'animation'],
    links: {
      href: 'https://greensock.com/',
    },
  },
  {
    title: 'Katex',
    desc: '在 Markdown 中写数学表达式',
    tags: ['markdown', 'math'],
    links: {
      href: 'https://katex.org/',
    },
  },
  {
    title: 'un0ver',
    desc: 'IOS 越狱工具',
    tags: ['ios', 'crack'],
    links: {
      href: 'https://unc0ver.dev/',
    },
  },
  {
    title: 'Nexus mods',
    desc: '单机游戏 mod 管理工具和论坛',
    tags: ['game', 'mod', 'forum', 'win'],
    links: {
      href: 'https://www.nexusmods.com/',
    },
  },
  {
    title: 'Dynamic Wallpaper',
    desc: 'mac 动态壁纸',
    tags: ['mac', 'wallpaper', 'web'],
    links: {
      href: 'https://dynamicwallpaper.club/',
    },
  },
  {
    title: 'OSU Game',
    desc: '一个在线戳泡泡的网站，不知道会不会倒闭',
    tags: ['game', 'web'],
    links: {
      href: 'https://osugame.online/',
    },
  },
  {
    title: 'DeepL',
    desc: '一个基于机器学习的翻译工具',
    tags: ['translate', 'web', 'mac', 'win'],
    links: {
      href: 'https://www.deepl.com',
    },
  },
  {
    title: 'Padavan',
    desc: '一个好用的路由器固件',
    tags: ['router', 'firmware', 'web'],
    links: {
      href: 'https://opt.cn2qq.com/',
    },
  },
  {
    title: '微 PE',
    desc: '一个好用的 windows PE 工具',
    tags: ['win', 'tool'],
    links: {
      href: 'http://www.wepe.com.cn/',
    },
  },
  {
    title: 'Blender',
    desc: '一个开源的建模工具，但做游戏和视频也不在话下',
    tags: ['win', 'mac', 'linux'],
    links: {
      href: 'https://www.blender.org/',
    },
  },
  {
    title: 'MIUI',
    desc: '一个开源的简洁的 Android 系统',
    tags: ['android', 'firmware'],
    links: {
      href: 'https://miuipolska.pl/',
    },
  },
  {
    title: 'Flume',
    desc: '一个开源节点编辑工具库',
    tags: ['web', 'js'],
    links: {
      href: 'https://flume.dev/',
      git: 'https://github.com/chrisjpatty/flume',
    },
  },
  {
    title: 'cdnjs',
    desc: '听说是全球最大的 cdn 提供商，免费，速度也不错',
    tags: ['web', 'js'],
    links: {
      href: 'https://cdnjs.com/',
    },
  },
  {
    title: 'Steam DB',
    desc: 'Steam 数据库，查询史上最低价神器',
    tags: ['search', 'game'],
    links: {
      href: 'https://steamdb.info/',
    },
  },
  {
    title: 'Beekeeper Studio',
    desc: '一个免费的漂亮的可查看和修改数据库的软件',
    tags: ['database', 'software', 'mac', 'win', 'linux'],
    links: {
      href: 'https://www.beekeeperstudio.io/',
    },
  },
  {
    title: 'Quick Type',
    desc: '一个可以把 JSON,Schema,GraphQL 转换成各种语言的类型',
    tags: ['web'],
    links: {
      href: 'https://app.quicktype.io/',
      git: 'https://github.com/quicktype/quicktype',
    },
  },
  {
    title: 'Google Search',
    desc: '无重定向的谷歌搜索',
    tags: ['web'],
    links: {
      href: 'https://google.com/ncr',
    },
  },
  {
    title: 'Internet Archive',
    desc: '互联网档案',
    tags: ['web', 'archive'],
    links: {
      href: 'https://archive.org/',
    },
  },
]
