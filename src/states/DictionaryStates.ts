import { atom } from 'jotai'

export const SearchTextAtom = atom<string>('')

export const ModalVisibilityAtom = atom<boolean>(false)

type SearchStatus = NOTEXT | TYPING | DONE
type NOTEXT = 'noText'
type TYPING = 'typing'
type DONE = 'done'
export const SearchStatusAtom = atom<SearchStatus>('noText')
