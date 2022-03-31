import { db } from "../../firebase";
import { collection, getDoc, getDocs, addDoc, updateDoc ,doc ,deleteDoc } from "firebase/firestore";
// bucket.js


// Actions
const LOAD = 'dictionary/LOAD'; 
const CREATE = 'dictionary/CREATE';
const REMOVE = 'dictionary/REMOVE';
const UPDATE = 'dictionary/UPDATE'
//맨처음에 초기값을 정해줘야됌
const initialState = {
    list:["영화관 가기", "매일 책읽기", "수영 배우기" , "코딩하기", " 배고파요"],

};

// Action Creators


export const createDic= (dictionary) => {
    console.log("액션생성할거임~")
    console.log(dictionary);
    return {type:CREATE, dictionary}
}

export const loadDictionary = (dictionary) => {
    
    return { type: LOAD, dictionary};
  };

  export function removeBucket(dictionary) {
    
    return {
        type: REMOVE,
        dictionary
    };
}

//middlewares
export const loadDickFB = () => {
    return async function (dispatch) {
      // 데이터를 가져와요!
      const dic_data = await getDocs(collection(db, "dictionary"));
    //   console.log(dic_data);

      let dic_list=[];
      dic_data.forEach( (a)=> {
        //   console.log(a.data());
        //   dic_list=[...dic_list,{...a.data()}];
          dic_list.push({id:a.id,...a.data()});

      });
      console.log(dic_list);
      dispatch(loadDictionary(dic_list));
    }
  }

  export const addDickFB = (dic_list) => {
    return async function(dispatch) {
        console.log("hi2");
        console.log(dic_list);
        
        const docRef = await addDoc(collection(db,"dictionary"),dic_list);
        const _dic= await getDoc(docRef);
        const dic_data = {id: _dic.id,..._dic.data()};
        
        console.log("hi3");
        console.log(dic_data);
        // console.log(docRef);
        //consoe.log((await getDoc(docRef)).data());

        dispatch(createDic(dic_data));
    }
  }

// Reducer
export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        case "dictionary/LOAD":
            {   
                console.log("reducer==========");
                console.log(state);
                console.log(action.dictionary);
                console.log("1");
                console.log({list: action.dictionary});
                return {list: action.dictionary};
            }
        case "dictionary/CREATE":
            {
                console.log("값을바꿀꺼임")
                const new_dic_list=[...state.list, action.dictionary];
                console.log("hi4");
                console.log({list:new_dic_list})
                return{list: new_dic_list };
            }
        case "dictionary/REMOVE":
            {
                console.log("값삭제할거임")
                const new_bucket_list = state.list.filter((l, idx) => {
                    return (parseInt(action.bucket_index) !== idx);})
                return { list: new_bucket_list}; 
            }
        // do reducer stuff
        // 타입별로 어떤케이스를 정해주면 되겠구나..
        default:
            return state;
    }
}

// side effects, only as applicable
// e.g. thunks, epics, etc
// export function getWidget() {
//     return dispatch => get('/widget').then(widget => dispatch(updateWidget(widget)))
// }
//middleware입니다~