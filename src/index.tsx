import * as React from "react";
import {registerWidget,registerLink, IContextProvider, } from './uxp';
import { TitleBar ,FilterPanel} from "uxp/components";
import './styles.scss';

interface IUxp_samplesProps {
    uxpContext?: IContextProvider
}

interface IState {}

/**
add sidebar links as well
 */
/*
registerLink({
    "id":"my-link",
    "label":"Click Me",
    "click":() => alert("Hello"),
});
*/

const Uxp_samplesWidget:React.FunctionComponent<IUxp_samplesProps>  = (props) => {
    return (
        <>
            <TitleBar title='Uxp_samples'>
                <FilterPanel>
                </FilterPanel>
            </TitleBar>
        </>
    )
};

registerWidget({
    "id": "uxp_samples",
    "name": "Uxp_samples",
    "widget": Uxp_samplesWidget,
    "configs": {
        /*"props": [
            { "name": "link", "label": "Link", "type": "string", "attr": {"required": true} },
            { "name": "imageSrc", "type": "string",  "label": "Image Src", "attr": {"required": true }},
            { "name": "linkTitle", "type": "string", "label": "Title", "attr": {"required": true }},
            { "name": "background", "type": "string", "label": "Background Color", "attr": {"required": false }}
            
        ],*/
        "container": {
            "background": "white"
        }
    }
});