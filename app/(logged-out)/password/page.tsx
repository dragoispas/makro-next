import PasswordCard from "@/components/auth/password/password-card";

interface Props {
    searchParams: { email: string }
}

const PasswordPage = ({ searchParams: { email } }: Props) => {
    return (
        <PasswordCard email={email} />
    )
}

export default PasswordPage;