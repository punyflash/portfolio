declare namespace App {
    type User = {
        id: number
        name: string
        avatar?: string
    }

    type Comment = {
        id: number
        user: User
        permissions: {
            edit: boolean
            delete: boolean
        }
        content: string
        children: Comment[]
        created_at: string
        updated_at: string
    }

    type Project = {
        id: number
        title: string
        slug: string
        description: string
        tags?: Tag[]
        subtitle?: string
        content?: string
        started_at?: string
        ended_at?: string
        created_at: string
        updated_at: string
    }

    type Tag = {
        title: string
        icon?: string
    }

    type BlogPost = {
        id: number
        title: string
        slug: string
        subtitle: string
        description: string
        banner?: string
        content?: string
        published_at: string
    }
}
