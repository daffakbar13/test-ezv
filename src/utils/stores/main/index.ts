import { create } from 'zustand'
import { MainStates } from './types/states'
import { MainActions } from './types/actions'

const useMainStore = create<MainActions & MainStates>()(() => ({}))

export default useMainStore
