export interface DtoUser {
    id?: any | null,
    name: string,
    avatar: string,
    create_at: string
}

export interface DtoVote {
    user_id?: any | null,
    type_vote: string,
    create_at: string
}

export interface DtoComment {
    id?: any | null,
    user_creator: DtoUser,
    comment: string,
    votes: DtoVote[],
    summary_vote: number,
    replies?: DtoComment[] | null,
    is_reply: boolean,
    create_at: string
}

export interface DtoCreateCommentResponse {
    name: string
}

