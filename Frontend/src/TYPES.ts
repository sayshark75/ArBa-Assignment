export interface CustomInputType {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  placeholder: string;
  formId: string;
  required?: boolean;
  autoComplete?: string;
  name: string;
  minLength?: number;
  maxLength?: number;
}

export interface CustomButtonType {
  title: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset" | undefined;
  form?: string;
  rounded?: string;
}

export interface LoginFormDataType {
  username: string;
  password: string;
}

export interface RegisterFormDataType {
  fullName: string;
  userName: string;
  email: string;
  password: string;
}

export interface UpdateProfileFormDataType {
  fullName: string;
}
