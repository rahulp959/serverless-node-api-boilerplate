export const handlerPath = (context: string) => `${context.split(process.cwd())[1].slice(1).replace(/\\/g, '/')}`;
