import {LoginForm} from './../components/login'
import home from './../assets/images/home.svg';
export function HomePage(){
return(
<div className="container">
    
    <div class="flex my-10">
        <div class="flex-auto w-1/2 my-16">
            <img src={home} alt="" className='w-5/6'/>
        </div>
        <div class="flex-initial w-1/2 mx-6">
         <LoginForm />
        </div>
    </div>
</div>
);
}