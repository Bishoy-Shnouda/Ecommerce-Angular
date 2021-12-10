export interface HttpResponseVM {
    success:boolean,
    data:any,
    messages:string[],
    page?:number,
    totalPages?:number,
    itemPerPage?:number

}
