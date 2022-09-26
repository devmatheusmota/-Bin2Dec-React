import { Input } from 'postcss';
import { useState } from 'react';
import './styles/main.css';

function App() {
	function convertBinToDec(str) {
		let result = 0;
		let previousValue = 0;
		for (let i = 0; i < str.length; i++) {
			result = previousValue * 2 + parseInt(str[i]);
			previousValue = result;
		}
		return result;
	}

	const [binary, setBinary] = useState('');
	const [decimal, setDecimal] = useState('');

	return (
		<div className='flex flex-col w-screen h-screen '>
			<div className='mt-1/2 flex flex-col items-center bg-[#fff] w-80 h-80 m-auto justify-around rounded-xl shadow-[15px_18px_5px_0px_rgba(0,0,0,0.75)]'>
				<h1 className='text-3xl font-black m-3'>Bin 2 Dec</h1>
				<div className='flex flex-col items-center m-3'>
					<label className='font-black' htmlFor='binary'>
						Binary number
					</label>
					<input
						type='text'
						id='binary'
						className='rounded border-2 text-center border-zinc-500'
						placeholder='Insert a binary number'
						onChange={(event) => {
							if (
								event.nativeEvent.data !== '1' &&
								event.nativeEvent.data !== '0'
							) {
								alert('You must enter either 0 or 1.');
								event.target.value = '';
							}
							if (event.target.value.length > 8) {
								alert('Your binary number has to have up to 8 digits.');
								event.target.value = '';
							}

							setBinary(event.target.value);
							setDecimal(convertBinToDec(event.target.value));
						}}
					/>
				</div>
				<div className='flex flex-col items-center m-3'>
					<label className='font-black' htmlFor='decimal'>
						Decimal number
					</label>
					<input
						type='text'
						id='decimal'
						className='rounded border-2 text-center border-zinc-500'
						value={decimal}
						readOnly
						disabled
					/>
				</div>
				<span>Developed by Matheus Mota</span>
			</div>
		</div>
	);
}

export default App;
