import { create, StateCreator } from 'zustand'
import { combine } from 'zustand/middleware'

type UserState = {
  userName: string
  fullName: string
  age: number
  address: string
}

type UserActions = {
  setAddress: (address: string) => void
  fetchUser: () => Promise<void>
}

export type UserSlice = UserState & UserActions

export const createUserSlice: StateCreator<
  UserSlice,
  [['zustand/immer', never]],
  [],
  UserSlice
> = (set) => ({
  address: '',
  age: 0,
  fullName: '',
  userName: '',
  setAddress: (address) =>
    set((state) => {
      state.address = address
    }),
  fetchUser: async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000))
    set({
      address: '',
      fullName: 'Joh Doe',
      userName: 'JohDoe@test.com',
      age: 32,
    })
  },
})

/**
 * The difference when using TypeScript is that instead of writing create(...), you have to write create<T>()(...)
 * (notice the extra parentheses () too along with the type parameter) where T is the type of the state to annotate it.
 *  For example
 * Alternatively, you can also use combine, which infers the state so that you do not need to type it.
 * const useBearStore = create(
  combine({ bears: 0 }, (set) => ({
    increase: (by: number) => set((state) => ({ bears: state.bears + by })),
  })),
) 
  Be careful we dont use the () when using combine 

Note that we don't use the curried version when using combine because combine "creates" the state.
When using a middleware that creates the state, it isn't necessary to use the curried version because 
the state now can be inferred. Another middleware that creates state is redux. So when using combine, 
redux, or any other custom middleware that creates the state, we don't recommend using the curried version.
 *
 */
interface BearState {
  bears: number
  increase: (by: number) => void
}

export const useBearStore = create<BearState>()((set) => ({
  bears: 0,
  increase: (by) => set((state) => ({ bears: state.bears + by })),
}))

export const useBearStoreCombine = create(
  combine({ bears: 0 }, (set) => ({
    increase: (by: number) => set((state) => ({ bears: state.bears + by })),
  }))
)
