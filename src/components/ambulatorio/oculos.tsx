import { useEffect, useState } from "react";
import { Input } from "../../element/Input";
import { Row } from "../../element/Row"
import { Column } from "../../element/column";
import { Label } from "../../element/label";
import OculosInterface from "../../model/dto/oculos-interface";
import { Textarea } from "../../element/textarea";

interface OculosProps{
    oculos ?: OculosInterface;
    setOculos : React.Dispatch<React.SetStateAction<OculosInterface>>;
}

const Oculos = ({oculos, setOculos}:OculosProps) => {

    const	[cd_profissional, setCd_profissional]		=useState<string>('')
    const	[vl_od_pl_dio_esf, setVl_od_pl_dio_esf]     =useState<string>('')
    const	[vl_od_pl_dio_cil, setVl_od_pl_dio_cil]     =useState<string>('')
    const	[vl_od_pl_eixo, setVl_od_pl_eixo ]          =useState<string>('')
    const	[vl_od_pl_adicao, setVl_od_pl_adicao]       =useState<string>('')
    const	[vl_oe_pl_dio_esf, setVl_oe_pl_dio_esf]     =useState<string>('')
    const	[vl_oe_pl_dio_cil, setVl_oe_pl_dio_cil]     =useState<string>('')
    const	[vl_oe_pl_eixo, setVl_oe_pl_eixo]           =useState<string>('')
    const	[vl_oe_pl_adicao, setVl_oe_pl_adicao]       =useState<string>('')
    const	[ds_orientacao, setDs_orientacao]           =useState<string>('')
    const	[nr_seq_tipo_lente, setNr_seq_tipo_lente]   =useState<string>('')


   
    const handleInputs=(event: React.ChangeEvent<HTMLInputElement>)=>{

        const {name, value} = event.target;

        switch (name) {
            case 'cd_profissional':
                setCd_profissional(value);
            break;
            
            case 'vl_od_pl_dio_esf':
                setVl_od_pl_dio_esf(value);
            break;
            
            case 'vl_od_pl_dio_cil':
                setVl_od_pl_dio_cil(value);
            break;

            case 'vl_od_pl_eixo':
                setVl_od_pl_eixo(value);
            break;

            case 'vl_od_pl_adicao':
                setVl_od_pl_adicao(value);
            break;

            case 'vl_oe_pl_dio_esf':
                setVl_oe_pl_dio_esf(value);
            break;

            case 'vl_oe_pl_dio_cil':
                setVl_oe_pl_dio_cil(value);
            break;

            case 'vl_oe_pl_eixo':
                setVl_oe_pl_eixo(value);
            break;

            case 'vl_oe_pl_adicao':
                setVl_oe_pl_adicao(value);
            break;

            case 'ds_orientacao':
                setDs_orientacao(value);
            break;

            case 'nr_seq_tipo_lente':
                setNr_seq_tipo_lente(value);
            break;
            }

            handleOculos()

    }

    const handleOculos=()=>{
        const oculosInit        :  OculosInterface={
            cd_profissional:   '',  
            vl_od_pl_dio_esf:   vl_od_pl_dio_esf,
            vl_od_pl_dio_cil:   vl_od_pl_dio_cil,
            vl_od_pl_eixo:   vl_od_pl_eixo,
            vl_od_pl_adicao:   vl_od_pl_adicao,
            vl_oe_pl_dio_esf:   vl_oe_pl_dio_esf,
            vl_oe_pl_dio_cil:   vl_oe_pl_dio_cil,
            vl_oe_pl_eixo:   vl_oe_pl_eixo,
            vl_oe_pl_adicao:   vl_oe_pl_adicao,
            ds_orientacao:   ds_orientacao,
            nr_seq_tipo_lente:   nr_seq_tipo_lente,
        }
        setOculos(oculosInit)
    }


    
    


    return(

        <Column border="1px solid #ccc" >
            <Label>Ocúlos</Label>
            <Row>
                <Label>OD</Label>
                <Input
                    value={vl_od_pl_dio_esf} 
                    onChange={ handleInputs }
                    type="number" 
                    name="vl_od_pl_dio_esf" 
                    id="vl_od_pl_dio_esf" 
                    placeholder="DE"
                     
                />
                <Input
                    value={vl_od_pl_dio_cil}  
                    onChange={ handleInputs }
                    type="number" 
                    name="vl_od_pl_dio_cil" 
                    id="vl_od_pl_dio_cil" 
                    placeholder="DC"
                />
                <Input 
                    value={vl_od_pl_eixo} 
                    onChange={ handleInputs }
                    type="number" 
                    name="vl_od_pl_eixo"    
                    id="vl_od_pl_eixo" 
                    placeholder="Eixo"
                />
                <Input 
                    value={vl_od_pl_adicao} 
                    onChange={ handleInputs }
                    type="number" 
                    name="vl_od_pl_adicao"  
                    id="vl_od_pl_adicao" 
                    placeholder="Adição"
                />
            

            </Row>

            <Row>
                <Label>OE</Label>
                <Input 
                    value={vl_oe_pl_dio_esf} 
                    onChange={ handleInputs }
                    type="number" 
                    name="vl_oe_pl_dio_esf" 
                    id="vl_oe_pl_dio_esf" 
                    placeholder="DE" 
                />
                <Input 
                    value={vl_oe_pl_dio_cil} 
                    onChange={ handleInputs }
                    type="number" 
                    name="vl_oe_pl_dio_cil" 
                    id="vl_oe_pl_dio_cil" 
                    placeholder="DC"
                />
                <Input 
                    value={vl_oe_pl_eixo} 
                    onChange={ handleInputs }
                    type="number" 
                    name="vl_oe_pl_eixo"    
                    id="vl_oe_pl_eixo" 
                    placeholder="Eixo"
                />
                <Input 
                    value={vl_oe_pl_adicao} 
                    onChange={ handleInputs }
                    type="number" 
                    name="vl_oe_pl_adicao"  
                    id="vl_oe_pl_adicao" 
                    placeholder="Adição"
                />
                
            

            </Row>

            <Column>
                <Label>Observação:</Label>
                <Textarea
                    height="100px"
                    width="96%"
                
                ></Textarea>
            </Column>
        </Column>
        

        
        
        


    )


}

export default Oculos;