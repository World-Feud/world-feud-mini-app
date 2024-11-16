import React, { createContext, useContext, useState, ReactNode } from "react";

interface CardContextType {
  currentCardId: number;
  setCurrentCardId: (id: number) => void;
}

const CardContext = createContext<CardContextType | undefined>(undefined);

export const CardProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [currentCardId, setCurrentCardId] = useState(0);

  return (
    <CardContext.Provider value={{ currentCardId, setCurrentCardId }}>
      {children}
    </CardContext.Provider>
  );
};

export const useCardContext = () => {
  const context = useContext(CardContext);
  if (!context) {
    throw new Error("useCardContext must be used within a CardProvider");
  }
  return context;
};
