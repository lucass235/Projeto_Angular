    export interface User {
        id: number;
        email: string;
        first_name: string;
        last_name: string;
        avatar: string;
    }

    export interface Support {
        url: string;
        text: string;
    }

    export interface ResponseUsers {
        page: number;
        per_page: number;
        total: number;
        total_pages: number;
        data: User[];
        support: Support;
    }

    //modelos para a criacao
    export interface RequestCreate {
        name: string;
        job: string;
    }

    export interface ResponseCreate {
        name: string;
        job: string;
        id: string;
        createdAt: Date;
    }
    //modelos para o get user
    export interface ResponseUser {
        data: User
    }

    // modelos para o update
    export interface RequestUpdate {
        name: string;
        job: string;
    }

    export interface ResponseUpdate {
        name: string;
        job: string;
        updatedAt: Date;
    }


