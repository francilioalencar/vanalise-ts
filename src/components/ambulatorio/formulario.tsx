
import { Row } from "../../element/Row";
import {Column} from "../../element/column";
import AcuidadeVisual from "./acuidadeVisual";
import Anamnese from "./anamnese"
import Oculos from "./oculos";


const Formulario =()=>{



    return(

        <Column width="98.45%">
            <Row>
                <Anamnese />
            </Row>
            <Row>
                <AcuidadeVisual width="calc(50% - 30px)" ds_tipo_acuidade={"Acuidade visual sem correção"} cd_tipo_acuidade={0} />
                <AcuidadeVisual width="calc(50% - 30px)" ds_tipo_acuidade={"Acuidade visual com correção"} cd_tipo_acuidade={0} />
      
            </Row>

            <Row>
                <Oculos />
            </Row>

        </Column>

    )
}


export default Formulario;