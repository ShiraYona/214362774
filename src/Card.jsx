
import { Fieldset } from 'primereact/fieldset';

export default function Card({props}){

    return(
        <>
        <script src="https://unpkg.com/primereact/core/core.min.js"></script>
        <script src="https://unpkg.com/primereact/fieldset/fieldset.min.js"></script>
        <Fieldset legend="Day">
             <h1>{props.title}</h1>
             <h1>description:{props.description}</h1>
                <br></br>
             <h1>date:<span>{props.start}</span></h1> 
        </Fieldset>
        </>
    )
}