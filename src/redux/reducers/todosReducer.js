const initialState=[
    {
        id:1,
        complete:false,
        task:'Some text',
    },
    {
        id:2,
        complete:true,
        task:'Some enother text',
    }
];

export default function (state=initialState,action) {
    switch (action.type){
        case "CHANGE_TEXT":
            const txt=action.payload;
            if(txt.length===0){
                return initialState;
            }
            return {text:action.payload};
        default:
            return state
    }
}