import React, { useCallback, useRef } from "react";

import useInput from "../../common/hooks/useInput";

import Plus from "../../resource/img/icon/plus.svg?react";
import Return from "../../resource/img/icon/return.svg?react";
import { useUsersStore } from "@/store";

interface ManageProps {
  isActive: boolean;
  handleActive: (state: boolean) => void;
  isAdd: boolean;
  handleAdd: (state: boolean) => void;
}

function Manage({ isActive, handleActive, isAdd, handleAdd }: ManageProps) {
  const addFavorite = useUsersStore(state => state.addFavoriteUser);
  const inputRef = useRef<HTMLInputElement>(null);

  const { input, setValue } = useInput("");

  const onClickPlus = useCallback(() => {
    setValue("");
    if (isAdd) {
      if (input.value) {
        addFavorite(input.value.trim());
        handleAdd(false);
      }
    } else {
      handleAdd(true);
      inputRef.current?.focus();
    }
  }, [isAdd, handleAdd, addFavorite, input.value, setValue]);

  const onKeyPress = useCallback(
    e => {
      if (e.key === "Enter") onClickPlus();
    },
    [onClickPlus],
  );

  return (
    <div className="Manage">
      <span>즐겨찾기 멤버</span>

      <button
        className="multi"
        onClick={() => {
          handleActive(!isActive);
          handleAdd(false);
        }}
      >
        {isActive ? "돌아가기" : "관리"}
      </button>

      <button className="background return" onClick={() => handleAdd(false)}>
        <Return />
      </button>

      <input
        type="text"
        placeholder="닉네임을 입력하세요"
        onKeyPress={onKeyPress}
        ref={inputRef}
        {...input}
      />

      <button className="background plus" onClick={onClickPlus}>
        <Plus />
      </button>
    </div>
  );
}

export default React.memo(Manage);
