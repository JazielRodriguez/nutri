import { CHANGE_LENG } from "../types"
import i18n from 'i18next';

const initialState = localStorage.getItem("leng")

export const changeLngReducer = (state = initialState, { type, lng }) => {
  switch (type) {

    case CHANGE_LENG:
        if (lng === "es") {
            i18n.changeLanguage("es")
            const newState = "es"
            localStorage.setItem("leng", "es")
            return newState
        }

        if (lng === "en") {
            i18n.changeLanguage("en")
            const newState = "en"
            localStorage.setItem("leng", "en")
            return newState
        }

        return state = newState

  default:
    return state
  }
}
