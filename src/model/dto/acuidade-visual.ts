import AcuidadeVisual from "../../components/ambulatorio/acuidadeVisual";

interface AcuidadeVisualInterface{
    vl_od_pl_av_sc  :   number;
    vl_oe_pl_av_sc  :   number;
    vl_od_pl_av_cc  :   number;
    vl_oe_pl_av_cc  :   number;
    ds_observacao   :   string;
    cd_profissional :   number;
    ie_tipo         :   string;
}



export default AcuidadeVisualInterface;