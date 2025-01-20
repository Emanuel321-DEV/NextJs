interface RepositoryItemProps {
    repository: {
        name: string;
        description: string;
        html_url: string;
    }
}


export function RepositoryItem (props: RepositoryItemProps) {
    return (
     <li>
        <strong>{props.repository?.name ?? "Nome padrao"}</strong>
        <p>{props.repository?.description ?? "Descrição padrao"}</p>


        <a target="_blank" rel="external" href={props.repository?.html_url ?? "link padrao"}>
            Acessar repositorio
        </a>
     </li>       
    )
}