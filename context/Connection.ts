import React from 'react';

const ConnectionContext: React.Context<true> = React.createContext(true);

export const ConnectionProvider = ConnectionContext.Provider;
export const ConnectionConsumer = ConnectionContext.Consumer;

export default ConnectionContext;
