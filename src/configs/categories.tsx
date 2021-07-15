import { IconType } from '../Icones'

export interface ICategory {
  tags: string[]
  title: string
  icon: IconType
}

export const categories: ICategory[] = [
  {
    tags: ['*'],
    title: '所有',
    icon: 'grid',
  },
  {
    tags: ['code', 'api'],
    title: '开发工具',
    icon: 'code',
  },
  {
    tags: ['web'],
    title: '在线工具',
    icon: 'web',
  },
  {
    tags: ['game'],
    title: '游戏',
    icon: 'game',
  },
  {
    tags: ['win'],
    title: 'win 软件',
    icon: 'win',
  },
  {
    tags: ['mac'],
    title: 'mac 软件',
    icon: 'mac',
  },
  {
    tags: ['linux'],
    title: 'linux 软件',
    icon: 'linux',
  },

  {
    tags: ['mirror'],
    title: '镜像源',
    icon: 'mirror',
  },
]
