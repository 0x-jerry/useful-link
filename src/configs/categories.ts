import { IconType } from '../Icons'

export interface ICategory {
  tags: IconType[]
  title: string
  icon: IconType
}

export const categories: ICategory[] = [
  {
    tags: [],
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
    title: 'windows',
    icon: 'win',
  },
  {
    tags: ['mac'],
    title: 'mac',
    icon: 'mac',
  },
  {
    tags: ['linux'],
    title: 'linux',
    icon: 'linux',
  },

  {
    tags: ['mirror'],
    title: '镜像源',
    icon: 'mirror',
  },
]
