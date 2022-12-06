import { createContext, ReactElement, ReactNode, useState } from "react";

interface ModalContextProps {
  visible: boolean | null,
  setVisible(value: boolean): void,
  content: ReactElement | null,
  setContent(value: JSX.Element | null): void,
  closeModal: Function,
}

interface LoadingLayerProviderProps {
  children: ReactNode
}

export const ModalContext = createContext<ModalContextProps>({
  visible: null,
  setVisible: (value: boolean) => {},
  content: null,
  setContent: (value: JSX.Element | null) => {},
  closeModal: () => {}
});

const ModalContextProvider: React.FC<LoadingLayerProviderProps> = ({ children }) => {
  const [visible, setVisible] = useState<boolean | null>(null);
  const [content, setContent] = useState<JSX.Element | null>(null);

  const closeModal = () => {
    setVisible(false);
    const interval = setInterval(() => {
      setContent(null);
      clearInterval(interval);
    }, 200);
  }

  return (
    <ModalContext.Provider
      value={{ 
        visible,
        setVisible,
        content,
        setContent,
        closeModal
      }}
    >
      {children}
    </ModalContext.Provider>
  );
}

export default ModalContextProvider;

