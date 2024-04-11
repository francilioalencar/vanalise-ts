import { useEffect, useState } from "react"
import { Row } from "../../element/Row"
import {Button} from "../../element/button"
import { Column } from "../../element/column"
import { Table } from "../../element/table"
import { Td } from "../../element/td"
import Formulario from "./formulario"
import AnamneseInterface from "../../model/dto/anaminese-interface"
import AcuidadeVisualInterface from "../../model/dto/acuidade-visual"
import OculosInterface from "../../model/dto/oculos-interface"
import { Label } from "../../element/label"
import { Input } from "../../element/Input"

const BoxAtendimento =()=>{





    const [token, setToken] = useState<string|null>('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJBcHBWYW5hbGlzZSIsInN1YiI6ImRyLmNlc2FyOzk2ODkwNyIsImV4cCI6MTcxMjg4MTA2NX0.rvvX-UMddgEwn1aXm_-bA_aVd_zuiwGmKG-P8JmPzZk')

    const acuidadeInit    :   AcuidadeVisualInterface ={ 
        vl_od_pl_av_sc  :   0,
        vl_oe_pl_av_sc  :   0,
        vl_od_pl_av_cc  :   0,
        vl_oe_pl_av_cc  :   0,
        ds_observacao   :   '',
        cd_profissional :   0,
        ie_tipo         :   'O',

    }

    const AnamneseInit    :   AnamneseInterface ={ 
        cd_profissional     :   0,  
        ds_anamnese         :   ''

    }

    const oculosInit        :  OculosInterface={
        cd_profissional:   '',  
        vl_od_pl_dio_esf:   '',
        vl_od_pl_dio_cil:   '',
        vl_od_pl_eixo:   '',
        vl_od_pl_adicao:   '',
        vl_oe_pl_dio_esf:   '',
        vl_oe_pl_dio_cil:   '',
        vl_oe_pl_eixo:   '',
        vl_oe_pl_adicao:   '',
        ds_orientacao:   '',
        nr_seq_tipo_lente:   '',
    }

    const[anamnese, setAnamnese]        =useState<AnamneseInterface>(AnamneseInit)
    const[acuidade, setAcuidadeVisual]  =useState<AcuidadeVisualInterface>(acuidadeInit)
    const[oculos, setOculos]            =useState<OculosInterface>(oculosInit)




    return(
        <Column width="99.5">
        <Row>
            <Label>Token:</Label>
            <Input id="dsToken" name="dsToken" />
        </Row>
        
        <Row>
            <Table
                style={{width:'100%', border: '1px solid #000', padding:'8px;'}}
            >

                <tr>
                    <Td background="#ccc" width={'100px'} >Cod.</Td>
                    <Td width={'300px'}  >{anamnese.ds_anamnese}</Td>
                    <Td background="#ccc" width={'5%'}>Nome</Td>
                    <Td width={'20%'}>Convênio</Td>
                    <Td background="#ccc" width={'5%'}>Dt. Nascimento</Td>
                    <Td width={'8%'}>Dt. Nascimento</Td>
                </tr>

            </Table>
        </Row>
        <Row>
            <Column width="30%" border="1px solid #ccc"></Column>
            <Column width="60%" border="1px solid #ccc">

                <Formulario oculos={oculos} setOculos={setOculos} />

            </Column>

            <Column width="10%" border="1px solid #ccc">
                <Button>Selecionar</Button>
                <Button>Iniciar</Button>
                <Button>Receita</Button>
                <Button
                    
                >Gravar</Button>
            </Column>
        </Row>
        </Column>
        
    )




}


export default BoxAtendimento