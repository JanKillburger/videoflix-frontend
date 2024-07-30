export interface Video {
    id: number,
    title: string,
    description: string,
    categories: VideoCategory[],
    poster: string,
    src: string,
    featured: boolean
}

export interface VideoCategory {
    title: string
}

export interface Notification {
    type: 'error' | 'success' | 'warning' | 'information',
    cta?: {function: Function, btnText: string},
    text: string
}