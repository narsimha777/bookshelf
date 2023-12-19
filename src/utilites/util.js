const utilities={
     result(data,tosearch){
        let result=[];
        if(typeof tosearch==='string'){
            result = data.filter((ele)=>ele.bookname&&ele.bookname.includes(tosearch));
        }
        if(typeof tosearch==='number'){
            result = data.filter((ele)=>ele.bookisbn&&ele.bookisbn.includes(tosearch));
        }
        return result;
    }
};

export default utilities;