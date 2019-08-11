import React, { useState } from 'react';
import { connect } from 'react-redux';
import { queryDataTopHeadlines, queryDataEverything, queryDataSources } from '../actions/';
import { Form, Button } from 'react-bootstrap';

const RenderTopHeadlines = (props) => {
    const [sources, setSources] = useState("");
    const [keyword, setKeyword] = useState("");
    const [category, setCategory] = useState("");
    const [language, setLanguage] = useState("");
    const [country, setCountry] = useState("");
    

    return(
        <div style={{background: '#d3d3d3', padding: 20}}>
            <Form onSubmit={(e) =>{
                e.preventDefault(); 
                props.topHeadlines({ 
                sources,
                keyword,
                category,
                language,
                country 
            })}}>
                <Form.Group>
                    <Form.Label>Sources</Form.Label>
                    <Form.Control type="text" value={sources}  onChange={(e) => setSources(e.target.value)} placeholder="Enter Sources" name="sources"/>
                </Form.Group>

                <Form.Group>
                    <Form.Label>Keyword</Form.Label>
                    <Form.Control type="text" value={keyword} onChange={(e) => setKeyword(e.target.value)} placeholder="Enter Keyword" name="keyword"/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Category</Form.Label>
                    <Form.Control type="text" value={category} onChange={(e) => setCategory(e.target.value)} placeholder="Enter Category" name="category"/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Language</Form.Label>
                    <Form.Control type="text" value={language} onChange={(e) => setLanguage(e.target.value)} placeholder="Enter Language" name="language"/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Country</Form.Label>
                    <Form.Control type="text" value={country} onChange={(e) => setCountry(e.target.value)} placeholder="Enter Country" name="country"/>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>

    )
}


const RenderEverything = (props) => {

    const [keyword, setKeyword] = useState("");
    const [sources, setSources] = useState("");
    const [domains, setDomains] = useState("");
    const [from, setFrom] = useState("");
    const [to, setTo] = useState("");
    const [language, setLanguage] = useState("");
    const [sortBy, setsortBy] = useState("");
    const[page, setPage] = useState("");

    return(
        <div style={{background: '#d3d3d3', padding: 20}}>
              <Form onSubmit={(e)=>{
                  e.preventDefault();
                  props.everything({
                    keyword,
                    sources,
                    domains,
                    from,
                    to,
                    language,
                    sortBy,
                    page
                  })
              }}>
                <Form.Group>
                    <Form.Label>Keyword</Form.Label>
                    <Form.Control type="text" value={keyword} onChange={(e) => setKeyword(e.target.value)} placeholder="Enter Keyword" name="keyword"/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Sources</Form.Label>
                    <Form.Control type="text" value={sources} onChange={(e) => setSources(e.target.value)} placeholder="Enter Sources" name="sources"/>
                </Form.Group> 
                <Form.Group>
                    <Form.Label>Domains</Form.Label>
                    <Form.Control type="text" value={domains} onChange={(e) => setDomains(e.target.value)} placeholder="Enter Domains" name="domains"/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>From</Form.Label>
                    <Form.Control type="text" value={from} onChange={(e) => setFrom(e.target.value)} placeholder="Enter From" name="from"/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>To</Form.Label>
                    <Form.Control type="text" value={to} onChange={(e) => setTo(e.target.value)} placeholder="Enter To" name="to"/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Language</Form.Label>
                    <Form.Control type="text" value={language} onChange={(e) => setLanguage(e.target.value)} placeholder="Enter Language" name="language"/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Sort By</Form.Label>
                    <Form.Control type="text" value={sortBy} onChange={(e) => setsortBy(e.target.value)} placeholder="Sort By" name="sortBy"/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Page</Form.Label>
                    <Form.Control type="number" value={page} onChange={(e) => setPage(e.target.value)} placeholder="Page" name="page"/>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    )
}

const RenderSources = (props) => {

    const [category, setCategory] = useState("");
    const [language, setLanguage] = useState("");
    const [country, setCountry] = useState("");

    return(
        <div style={{background: '#d3d3d3', padding: 20}}>
            <Form onSubmit={(e) => {
                e.preventDefault();
                props.sources({
                    category,
                    language,
                    country
                })
            
            }}>
            <Form.Group>
                    <Form.Label>Category</Form.Label>
                    <Form.Control type="text" value={category} onChange={(e) => setCategory(e.target.value)} placeholder="Enter Category" name="category"/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Language</Form.Label>
                    <Form.Control type="text" value={language} onChange={(e) => setLanguage(e.target.value)} placeholder="Enter Language" name="language"/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Country</Form.Label>
                    <Form.Control type="text" value={country} onChange={(e) => setCountry(e.target.value)} placeholder="Enter Country" name="country"/>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return{
        topHeadlines: (data) => { dispatch(queryDataTopHeadlines(data))},
        everything: (data) => { dispatch(queryDataEverything(data)) },
        sources: (data) => { dispatch(queryDataSources(data)) }
    }
}

const QueryData = (props) => {
    
    switch(props.description){
        case "top-headlines":
             return <RenderTopHeadlines {...props}/>;
    
        case "everything":
             return <RenderEverything {...props}/>;

        case "sources":
             return <RenderSources {...props} />;

    }

    return null;
}



export default connect(null, mapDispatchToProps)(QueryData);