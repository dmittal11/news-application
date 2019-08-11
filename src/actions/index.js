import axios from "axios";

const getData = () => (dispatch) => {
     return axios.get("https://newsapi.org/v2/top-headlines?country=us&apiKey=896f3f0ae39e4f4393033aad46954f6d")
        .then((res) => {
          
            return dispatch({
                type: "GET_DATA",
                payload: res.data.articles
            })
        })
}

const queryDataTopHeadlines = (data) => (dispatch) => {
    console.log("Top-Headlines Data: ", data)
     return axios.get('https://newsapi.org/v2/top-headlines', {
        params: {
            
            ...(!(data.sources === "") && { sources: data.sources }),
            ...(!(data.keyword === "") && { q: data.keyword }),
            ...(!(data.category === "") && { category: data.category }),
            ...(!(data.language === "") && { language: data.language }),
            ...(!(data.country === "") && { country: data.country}),
            apiKey: '896f3f0ae39e4f4393033aad46954f6d'
        }})
        .then((res) => {
            console.log("Res from data top-headlines: ", res)
            return dispatch({
                type: "GET_DATA",
                payload: res.data.articles
            })
        })
    }

const queryDataEverything = (data) => (dispatch) => {
    console.log("Everything Data: ", data)
    return axios.get('https://newsapi.org/v2/everything', {
        params: {
            ...(!(data.keyword === "") && { q: data.keyword }),
            ...(!(data.sources === "") && { sources: data.sources }),
            ...(!(data.domains === "") && { domains: data.domains }),
            ...(!(data.from === "") && { from: data.from }),
            ...(!(data.to === "") && { to: data.to }),
            ...(!(data.language === "") && { language: data.language }),
            ...(!(data.sortBy === "") && { sortBy: data.sortBy }),
            ...(!(data.page === "") && { page: data.page }),
               apiKey: '896f3f0ae39e4f4393033aad46954f6d'
        }
     })
       .then((res) => {
        console.log("Res from data everything: ", res)
           return dispatch({
               type: "GET_DATA",
               payload: res.data.articles
           })
       })
}

const queryDataSources = (data) => (dispatch) => {
    console.log("Sources Data: ", data)
    return axios.get('https://newsapi.org/v2/sources', {

       params: {
           ...(!(data.category === "") && { category: data.category }),
           ...(!(data.language === "") && { language: data.language }),
           ...(!(data.country === "") && { country: data.country }),
              apiKey: '896f3f0ae39e4f4393033aad46954f6d'
       }
    })
      .then((res) => {
          console.log("Res from data sources: ", res)
          return dispatch({
              type: "GET_DATA",
              payload: res.data.sources
          })
      })   
}
    

export  {getData, queryDataEverything, queryDataSources, queryDataTopHeadlines}
    

