import { Input } from "../../element/Input";
import { Itens } from "../../element/Itens";
import {Row} from "../../element/Row";
import { Column } from "../../element/column";
import { Label } from "../../element/label";


interface AcuidadeVisualProps{

    ds_tipo_acuidade    :   string;
    cd_tipo_acuidade    :   number;
    width               ?:  string;


}


const AcuidadeVisual =({ds_tipo_acuidade, cd_tipo_acuidade, width}:AcuidadeVisualProps)=>{


    return (

        <Column 
            width={width}
            border={'1px solid #ccc'}    
        >
            <Label>{ds_tipo_acuidade}</Label>


            <Column width="auto">

                
                    <Label>OD AV S/C</Label>
                    <Input />
                    
                
                    <Label>OE AV S/C</Label>
                    <Input />
              

            </Column>

        
        </Column>

    )



}

export default AcuidadeVisual;