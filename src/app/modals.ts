export interface Game{
    id:string;
    background_image:string;
    name:string;
    released:string;
    matacritic_url:string;
    website:string;
    description:string;
    metacritic:number;
    genres:Array<Genre>;
    parent_platforms:Array<ParentPlatform>;
    publishers:Array<Publishers>;
    ratings:Array<Rating>;
    screenshots:Array<Screenshots>;
    trailers:Array<Trailer>;
    platforms:Array<platforms>;
}


export interface APIResponse<T>{
    results:Array<T>;
}

interface Genre{
    name:string;
}

interface ParentPlatform{
    platform:{
        name:string;
    };
}

interface Publishers{
    name:string;
}

interface Rating{
    id:number;
    count:number;
    title:string;
}

interface Screenshots{
    height: number;
    id: number;
    image:string;
    is_deleted:boolean;
    width:number;
}

interface Trailer{
    data:{
        max:string;
    };
    
}

interface platforms{
    platform:{
        games_count:number, 
        id:number,
        image:string
        image_background:string,
        name: string,
        slug:string,
    }
}