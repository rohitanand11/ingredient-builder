import React, { Component } from "react";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/modal/Modal";
import CheckoutPreview from "../../components/checkoutPriview/CheckoutPreview";

const BASE_PRICE = 20;

const RATE = {
  salad: 32,
  bacon: 20,
  cheese: 25,
  meat: 38,
};

class BurgerBuilder extends Component {
  state = {
    ingridients: {
      salad: 1,
      bacon: 0,
      cheese: 0,
      meat: 0,
    },
    totalPrice: BASE_PRICE + RATE.salad,
    sumOfIngridients: 1,
    checkoutPreviewEnableModal: false,
  };

  addIngridientHandler = (type) => {
    const updatedIngridients = { ...this.state.ingridients };
    let updatedSumOfingridients = 0;
    let newPrice = 0;
    updatedIngridients[type] = this.state.ingridients[type] + 1;
    newPrice = this.state.totalPrice + RATE[type];
    updatedSumOfingridients = this.DisableOrderButtonCheck(updatedIngridients);
    this.setState({
      ingridients: updatedIngridients,
      totalPrice: newPrice,
      sumOfIngridients: updatedSumOfingridients,
    });
  };

  removeIngridients = (type) => {
    const updatedIngridients = { ...this.state.ingridients };
    let updatedSumOfingridients = 0;
    let newPrice = 0;
    updatedIngridients[type] = this.state.ingridients[type] - 1;
    newPrice = this.state.totalPrice - RATE[type];
    updatedSumOfingridients = this.DisableOrderButtonCheck(updatedIngridients);
    this.setState({
      ingridients: updatedIngridients,
      totalPrice: newPrice,
      sumOfIngridients: updatedSumOfingridients,
    });
  };

  getDisabledInfoForLess = () => {
    let disabledInfoObject = { ...this.state.ingridients };
    for (const key in disabledInfoObject) {
      if (disabledInfoObject[key] === 0) {
        disabledInfoObject[key] = true;
      } else {
        disabledInfoObject[key] = false;
      }
    }
    return disabledInfoObject;
  };

  getDisabledInfoForMore = () => {
    let disabledInfoObject = { ...this.state.ingridients };
    for (const key in disabledInfoObject) {
      if (disabledInfoObject[key] === 4) {
        disabledInfoObject[key] = true;
      } else {
        disabledInfoObject[key] = false;
      }
    }

    return disabledInfoObject;
  };

  DisableOrderButtonCheck = (pUpdatedIngridients) => {
    let sum = 0;
    const sumIngridient = { ...pUpdatedIngridients };
    for (const key in sumIngridient) {
      sum = sum + sumIngridient[key];
    }
    if (sum === 0) {
      return true;
    } else {
      return false;
    }
  };

  EnableCheckoutModal = () => {
    this.setState({ checkoutPreviewEnableModal: true });
  };

  DisableCheckoutModal = () => {
    this.setState({ checkoutPreviewEnableModal: false });
  };

  render() {
    const disableInfoForLess = this.getDisabledInfoForLess();
    const disableInfoForMore = this.getDisabledInfoForMore();
    const disabledOrderButtonCheck = this.state.sumOfIngridients;

    return (
      <React.Fragment>
        <Modal show={this.state.checkoutPreviewEnableModal} disableBackdrop={this.DisableCheckoutModal}>
          <CheckoutPreview
            propsObj={this.state.ingridients}
            totalPrice={this.state.totalPrice}
            disableCheckout={this.DisableCheckoutModal}
          />
        </Modal>
        <Burger ingridients={this.state.ingridients} />
        <BuildControls
          added={this.addIngridientHandler}
          remove={this.removeIngridients}
          disableinfoObjectForLess={disableInfoForLess}
          disableinfoObjectForMore={disableInfoForMore}
          totalPrice={this.state.totalPrice.toFixed(2)}
          disabledOrderButtonCheck={disabledOrderButtonCheck}
          enableCheckoutModal={this.EnableCheckoutModal}
        />
      </React.Fragment>
    );
  }
}

export default BurgerBuilder;
