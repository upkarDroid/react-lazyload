import React, { Component } from 'react';
import Lazyload from '../../src/';
import Operation from '../components/Operation';
import { CSSTransition, TransitionGroup } from 'react-transition-group';



export default class FadeIn extends Component {
  render() {
    return (
      <div className="wrapper">
        <Operation type="fadein" noExtra />
        <div className="widget-list image-container">
          <Lazyload throttle={200} height={300}>
            <CSSTransition key="1"
              className="fade"
              appear={true}
              timeout={500}
              >
              <img src="http://ww3.sinaimg.cn/mw690/62aad664jw1f2nxvya0u2j20u01hc16p.jpg" />
            </CSSTransition>
          </Lazyload>
          <Lazyload throttle={200} height={300}>
            <CSSTransition key="1"
              className="fade"
              appear={true}
              timeout={500}
              >
              <img src="http://ww1.sinaimg.cn/mw690/62aad664jw1f2nxvyo52qj20u01hcqeq.jpg" />
            </CSSTransition>
          </Lazyload>
          <Lazyload throttle={200} height={300}>
            <CSSTransition key="1"
              className="fade"
              appear={true}
              timeout={500}
            >
              <img src="http://ww2.sinaimg.cn/mw690/62aad664jw1f2nxvz2cj6j20u01hck1o.jpg" />
            </CSSTransition>
          </Lazyload>
          <Lazyload throttle={200} height={300}>
            <CSSTransition key="1"
              className="fade"
              appear={true}
              timeout={500}
            >
              <img src="http://ww1.sinaimg.cn/mw690/62aad664jw1f2nxvzfjv6j20u01hc496.jpg" />
            </CSSTransition>
          </Lazyload>
          <Lazyload throttle={200} height={300}>
            <CSSTransition key="1"
              className="fade"
              appear={true}
              timeout={500}
            >
              <img src="http://ww1.sinaimg.cn/mw690/62aad664jw1f2nxw0e1mlj20u01hcgvs.jpg" />
            </CSSTransition>
          </Lazyload>
          <Lazyload throttle={200} height={300}>
            <CSSTransition key="1"
              className="fade"
              appear={true}
              timeout={500}
            >
              <img src="http://ww4.sinaimg.cn/mw690/62aad664jw1f2nxw0p95dj20u01hc7d8.jpg" />
            </CSSTransition>
          </Lazyload>
          <Lazyload throttle={200} height={300}>
            <CSSTransition key="1"
              className="fade"
              appear={true}
              timeout={500}
            >
              <img src="http://ww2.sinaimg.cn/mw690/62aad664jw1f2nxw134xqj20u01hcqjg.jpg" />
            </CSSTransition>
          </Lazyload>
          <Lazyload throttle={200} height={300}>
            <CSSTransition key="1"
              className="fade"
              appear={true}
              timeout={500}
            >
              <img src="http://ww1.sinaimg.cn/mw690/62aad664jw1f2nxw1kcykj20u01hcn9p.jpg" />
            </CSSTransition>
          </Lazyload>
        </div>
      </div>
    );
  }
}

