import * as React from "react";
import {registerWidget,registerLink, IContextProvider, } from './uxp';
import { TitleBar ,FilterPanel, WidgetWrapper} from "uxp/components";
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
        <WidgetWrapper className={'welcome-widget'}>
            <div className={'content'}>
               <div>Welcome to the Lucy Experience Portal</div>
            </div>
            <a target='_blank' className='view-source' href='https://github.com/lucy-platform/uxp-samples/welcome'>View Source</a>
        </WidgetWrapper>
    )
};

registerWidget({
    "id": "welcome",
    "name": "Welcome",
    "widget": WelcomeWidget,
    "configs": {
        layout:{
          w:15,
          h:7
      }, },
});