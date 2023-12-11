var initialData = {
    categories:[],
    loginStatus:false
}

const CategoryReducer = (data = initialData , action)=>{

    switch(action.type){
        case "GETCAT":
            return {
                ...data,
                categories:[...data.categories , ...action.payload]
            }
        default :{
            return data;
        }
    }
}

export default CategoryReducer;