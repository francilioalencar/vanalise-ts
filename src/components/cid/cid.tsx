import { Input } from "../../element/Input"
import { Row } from "../../element/Row"
import { Column } from "../../element/column"
import { Label } from "../../element/label"
import { Textarea } from "../../element/textarea"

const Cid =()=>{


    return(

        
        
        <Column border="1px solid #ccc">
            <Label>Cid</Label>
            <Row>
                <Input width="25%" placeholder="Cid" />
                <Input width="75%" placeholder="Descrição" />
            
            </Row>

           
                <Label>Justificativa</Label>
                <Textarea
                    height="75px"
                />
            
          
     
        </Column>
        



    )

}


export default Cid