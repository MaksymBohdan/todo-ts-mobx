import { ChangeEvent } from 'react';

export type Todo = {
  id: number;
  title: string;
  status: boolean;
};

export type InputT = ChangeEvent<HTMLInputElement>;
