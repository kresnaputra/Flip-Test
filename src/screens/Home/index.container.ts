import {Dispatch, bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import Home from './index';

import {IState} from '../../types/state';
import {getDataAction} from '../../actions/home.action';

const mapStateToProps = (state: IState) => ({
  data: state.home.data,
});

const mapDispatchToProps = (dispatch: Dispatch) => {
  return bindActionCreators({getDataAction}, dispatch);
};

export interface IReduxProps
  extends ReturnType<typeof mapStateToProps>,
    ReturnType<typeof mapDispatchToProps> {}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
