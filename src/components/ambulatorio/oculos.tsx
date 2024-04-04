import { Input } from "../../element/Input";
import { Row } from "../../element/Row"
import { Column } from "../../element/column";
import { Label } from "../../element/label";


const Oculos = () => {

    return(

        <Column border="1px solid #ccc" >
            <Label>Ocúlos</Label>
            <Row>
                <Label>OD</Label>
                <Input type="number" placeholder="DE" />
                <Input type="number" placeholder="DC"/>
                <Input type="number" placeholder="Eixo"/>
                <Input type="number" placeholder="Adição"/>
            

            </Row>

            <Row>
                <Label>OE</Label>
                <Input type="number" placeholder="DE" />
                <Input type="number" placeholder="DC"/>
                <Input type="number" placeholder="Eixo"/>
                <Input type="number" placeholder="Adição"/>
            

            </Row>
        </Column>
        

        
        
        


    )


}

export default Oculos;