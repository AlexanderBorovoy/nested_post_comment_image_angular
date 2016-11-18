export interface Post {
    name:string;
    comments_attributes: Comments_attributes[];
    value: string; //need for extracting json data in the object
}
export interface Comments_attributes {
    title: string;
    images_attributes: Images_attributes[];
}
export interface Images_attributes {
    url: string;
}