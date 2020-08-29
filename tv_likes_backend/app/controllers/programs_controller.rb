class ProgramsController < ApplicationController
  before_action :set_program, only: :show

  def index # display list of Programs
    @programs = Program.all

    render json: @programs
  end

  def show
    render json: @program
  end

  def create # save a new obj in db
    prg_obj = Program.find_or_initialize_by(title: program_params[:title]) do |newObj|
      newObj.description = program_params[:description]
      newObj.likes = program_params[:likes]
    end

    # prg_obj2 = Program.where(title: program_params[:title]).first_or_initialize
    # prg_obj2.description = program_params[:description]
    # prg_obj2.likes = program_params[:likes]
    # program_params[:characters_attributes].each { |obj| prg_obj2.characters.build(obj) }

    program_params[:characters_attributes].each { |obj| prg_obj.characters.build(obj) }

    # binding.pry

    if prg_obj.save
      render json: prg_obj, status: :created
    else
      render json: prg_obj.errors, status: :unprocessable_entity
    end
    # create a character w/the program
    # prg_obj.characters.build(char_attrs) # <~ from has_many assoc
  end

  private
  def set_program
    @program = Program.find(params[:id])
  end

  def program_params # strong params, used in create & update, to quick obj attr assignment
    # persist good data via only allowing specific attr 2 come in
    params.require(:program).permit(
      :title,
      :description,
      :likes,
      characters_attributes: [:name]
    )

    # params = {
    #   program: {
    #     :title,
    #     :description,
    #     :likes
    #   }
    # }
  end


end
