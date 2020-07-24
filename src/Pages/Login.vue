<template>
<div class="h-screen flex items-center justify-center bg-gray-100 w-full antialiased font-nunito select-none">
    <div class="p-6 max-w-sm w-full bg-white shadow-2xl rounded-md -mt-40">
        <form action="#">
            <h1 class="text-center font-normal text-2xl text-gray-600 ">Login</h1>
            <label class="block">
                <span class="text-gray-600 text-sm ">E-Mail Address</span>
                <input type="email" id="email" name="email" class="w-full focus:border-blue-500 focus:outline-none focus:shadow-outline text-black font-normal text-base py-2 px-3 bg-white rounded-md focus:text-black focus:bg-white outline-none border border-gray-200 transition duration-200 ease-in-out" required autocomplete="email">
            </label>
            <label class="block mt-2">
                <span class="text-gray-600 text-sm ">Password</span>
                <input type="password" id="password" name="password" class="w-full focus:border-blue-500 focus:outline-none focus:shadow-outline text-black font-normal text-base py-2 px-3 bg-white rounded-md focus:text-black focus:bg-white outline-none border border-gray-200 transition duration-200 ease-in-out" required>
            </label>
            <div class="flex justify-between items-center mt-4">
                <div>
                    <label class="inline-flex items-center">
                        <input type="checkbox" class="form-checkbox bg-white" name="remember" id="remember">
                        <span class="mx-2 text-gray-600 text-sm ">Remember Me</span>
                    </label>
                </div>
                <div>
                    <a class="block text-sm text-blue-500 hover:underline outline-none focus:outline-none focus:shadow-outline rounded" href="http://localhost:8000/password/reset">
                        Forgot Your Password?
                    </a>
                </div>
            </div>
            <label class="block mt-4">
                <button class="outline-none focus:outline-none focus:shadow-outline bg-blue-500 focus:bg-blue-600 hover:bg-blue-600 w-full py-2 rounded-md text-white font-semibold" type="submit">Signin</button>
            </label>
        </form>
    </div>
</div>
</template>