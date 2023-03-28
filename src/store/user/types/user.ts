export interface IUserState {
  currentUser: IUserData | null;
  isLoading: boolean;
  errorMessage: string;
}

export interface IUserData {
  id: number;
  createdAt: Date;
  email: string;
  displayName?: string;
}
