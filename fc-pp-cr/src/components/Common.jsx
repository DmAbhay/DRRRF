import { BookList } from "./conditionalRendering/BookCard";
import { DashBoard } from "./conditionalRendering/DashBoard";
import { ShortCicuite } from "./conditionalRendering/ShortCircuitRendering";
import { ReactContext } from "./Context/ReactContext";
import { UserProvider } from "./Context/UserProvider";
import { AgeInput, NameInput } from "./State/ControlledInput";
import { DynamicAddressForm } from "./State/DynamicAddressForm";
import { DynamicFieldsForm } from "./State/DynamicFieldForm";
import { DynamicForm, EnhancedForm, MultiInputForm1, ValidatedForm } from "./State/FormSubmit";
import { ProfileForm, ProfileFormWithValidation } from "./State/ProfileForm";
import { UnControlledInput } from "./State/UnControlledInput";
import { Counter, LikeButton } from "./State/UseState";
import { CounterEffect } from "./UseEffect/CounterEffect";
import { DebouncedSearch } from "./UseEffect/DebouncedSearch";
import { GithubUserSearch } from "./UseEffect/GithubUserSearch";
import { HelloEffect } from "./UseEffect/HelloEffect";
import { UseEffectWithApi } from "./UseEffect/UseEffectWithApi";
import { AxiosUserFetcher, UserFetcher } from "./UseEffect/UserFetcher";


export default function Common() {
    return (
        <>
            {/* <BookList />
            <ShortCicuite /> */}
            {/* <DashBoard/> */}

            {/* <Counter/>
            <LikeButton/> */}

            {/*<NameInput/> */}
            {/*<AgeInput/> */}

            {/* <UnControlledInput/> */}
            {/* <MultiInputForm1 /> */}

            {/* <DynamicForm/> */}
            {/* <ValidatedForm/> */}
            {/* <EnhancedForm/> */}
            {/* <ProfileForm/> */}
            {/* <ProfileFormWithValidation/> */}
            {/* <DynamicFieldsForm/> */}
            {/* <DynamicAddressForm/> */}

            {/* <HelloEffect/> */}
            {/* <CounterEffect/> */}
            {/* <UserFetcher/> */}
            {/* <AxiosUserFetcher/> */}
            {/* <DebouncedSearch/> */}
            {/* <CounterEffect/> */}
            {/* <UseEffectWithApi/> */}

            {/* <GithubUserSearch/> */}


            <UserProvider>
                <ReactContext/>
                <UseEffectWithApi/>
            </UserProvider>





        </>
    )
}

