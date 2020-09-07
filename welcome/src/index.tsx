import * as React from "react";
import {registerWidget,registerLink, IContextProvider, } from './uxp';
import { TitleBar ,FilterPanel} from "uxp/components";
import './styles.scss';

interface IWelcomeProps {
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

const WelcomeWidget:React.FunctionComponent<IWelcomeProps>  = (props) => {
    return (
        <>
            <TitleBar title='Welcome'>
                <FilterPanel>
                </FilterPanel>
            </TitleBar>
        </>
    )
};

registerWidget({
    "id": "welcome",
    "name": "Welcome",
    "widget": WelcomeWidget,
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