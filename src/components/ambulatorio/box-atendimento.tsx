import { Row } from "../../element/Row"
import {Button} from "../../element/button"
import { Column } from "../../element/column"
import { Table } from "../../element/table"
import { Td } from "../../element/td"
import { Th } from "../../element/th"
import Formulario from "./formulario"

const BoxAtendimento =()=>{

    return(
        <Column width="99.5">
        <Row>
            <Table
                style={{width:'100%', border: '1px solid #000', padding:'8px;'}}
            >
                <tr>
                    <Th whidth="5%">Cod.</Th>
                    <Th whidth="25%">Nome</Th>
                    <Th whidth="5%">Data nascimento</Th>
                    <Th whidth="10%">Convênio</Th>
                    <Th whidth="15%">Profissão</Th>
                </tr>
                <tr>
                    <Td whidth="5%">Cod.</Td>
                    <Td whidth="25%">Nome</Td>
                    <Td whidth="5%">Data nascimento</Td>
                    <Td whidth="10%">Convênio</Td>
                    <Td whidth="15%">Profissão</Td>
                </tr>
            </Table>
        </Row>
        <Row>
            <Column width="30%" border="1px solid #ccc"></Column>
            <Column width="60%" border="1px solid #ccc">

                <Formulario />

            </Column>

            <Column width="10%" border="1px solid #ccc">
                <Button>Selecionar</Button>
                <Button>Iniciar</Button>
                <Button>Receita</Button>
                <Button>Gravar</Button>
            </Column>
        </Row>
        </Column>
        
    )




}


export default BoxAtendimento