const shorten = (title)=>{
const titleSplited= title.split(" ");

let newTitle=`${titleSplited[0]} ${titleSplited[1]}`
newTitle=newTitle.replace("-","")
return newTitle;
}

const isInCart=(state,id)=>{
   const result =!!state.selectedItems.find(item=>item.id===id);

   return result
}


const quantityCount = (state, id) => {
    const index = state.selectedItems.findIndex(item => item.id === id);
    if (index === -1) {
        return false
    } else {
        return state.selectedItems[index].quantity;
    }
}


export {shorten,isInCart,quantityCount};


