import modalSlice, { Modals } from "../store/slices/modal";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/reducers";
import { useCallback } from "react";

function useModal(modalName: Modals) {
    const dispatch = useDispatch();
    const isOpen = useSelector((state: RootState) => state.modal[modalName]);

    const Open = useCallback(() => {
        dispatch(
            modalSlice.actions.setModal({
                name: modalName,
                value: true,
            })
        );
    }, [dispatch, modalName]);

    const closed = useCallback(() => {
        dispatch(
            modalSlice.actions.setModal({
                name: modalName,
                value: false,
            })
        );
    }, [dispatch, modalName]);
    return {
        isOpen,
        Open,
        closed,
    };
}

export default useModal;