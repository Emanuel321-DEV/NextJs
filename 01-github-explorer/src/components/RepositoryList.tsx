import { RepositoryItem } from "./RepositoryItem";
import "../styles/repositorylist.scss";
import {useState, useEffect} from 'react';

interface Repositories {
    name: string;
    description: string;
    html_url: string;
}


export function RepositoryList(){
    const [repositories, setRepositories] = useState<Repositories[]>([])

    useEffect(()=>{
        fetch('http://api.github.com/orgs/rocketseat/repos')
        .then(response => response.json())
        .then(data => setRepositories(data))
    }, [])



    return (
        <section className="repository-list">
            
            <h1>Lista de repositórios</h1>
 
            <ul>
                {repositories.map( (repository, index) => {
        
                 if(index < 5){ 
                    return ( 
                        <RepositoryItem key={repository.name} repository={repository}/>
                    )
                 }   

                })}  
               
            </ul>         
        </section>
    )
}